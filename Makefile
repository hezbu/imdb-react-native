devmac:
	open -a Simulator
	open "rndebugger://set-debugger-loc?host=localhost&port=19000"
	yarn install
	yarn start