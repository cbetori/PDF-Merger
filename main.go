package main

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"

	"github.com/pdfcpu/pdfcpu/pkg/api"
)

func main() {
	var url string
	flag.StringVar(&url, "url", "", "the string")
	flag.Parse()
	fmt.Println(url)
	Merge(url)
}

func Merge(inDir string) {
	msg := "TestMerge"
	var files []string
	err := filepath.Walk(inDir, func(path string, info os.FileInfo, err error) error {
		if path[len(path)-3:] == "pdf" {
			fmt.Println(path)
			files = append(files, path)
		}
		return nil
	})
	if err != nil {
		panic(err)
	}
	outFile := filepath.Join(inDir, "Merged.pdf")
	// Merge inFiles by concatenation in the order specified and write the result to outFile.
	if err := api.MergeFile(files, outFile, nil); err != nil {
		fmt.Println("%s: %v\n", msg, err)
	}
}
