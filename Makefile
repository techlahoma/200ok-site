SHELL = /bin/bash

default: build

dev: node_modules
	npm run start

build: node_modules
	npm run build

deploy: node_modules
	npm run deploy

node_modules: package.json package-lock.json
	npm install
	touch node_modules

clean:
	rm -rf node_modules public
