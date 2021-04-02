SHELL = /bin/bash

ROBOTS = public/robots.txt

default: build

dev: node_modules
	npm run start

build: node_modules
	npm run build

# https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
# CONTEXT: production | deploy-preview | branch-deploy
deploy-netlify: build
	[ ! -f "$(ROBOTS).$(CONTEXT)" ] || cp "$(ROBOTS).$(CONTEXT)" $(ROBOTS)
	rm -f $(ROBOTS).*

node_modules: package.json package-lock.json
	npm install
	touch node_modules

clean:
	rm -rf node_modules public
