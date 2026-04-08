.PHONY: all
all: build push

.PHONY: build
build: .env
	docker build . -t imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest

.PHONY: push
push:
	docker image push imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest

.PHONY: deploy
deploy: pull run

.PHONY: pull
pull:
	docker pull imgreg.chemserv.scc.kit.edu/chemotion-web/cms:latest

.PHONY: run
run: .env database
	docker compose up -d
