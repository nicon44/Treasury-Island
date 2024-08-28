katana:
	katana --disable-fee --allowed-origins "*"

setup:
	@./scripts/setup.sh
	
build:
	sozo build && sozo migrate apply

torii:
	torii --world 0x64ba78fe3ab8aedf19206180187d77a8b20b2a1f94877e18b86cb92dca82334 --allowed-origins "*"
