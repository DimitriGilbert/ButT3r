# bcT3

my go to project creator

## Installation

An installation script is provided

```bash
# download the script
curl -s https://raw.githubusercontent.com/DimitriGilbert/bcT3/main/utils/get_bcT3 -O;
# make it executable
chmod +x get_bcT3;
# display the help
./get_bcT3 --help;
#	-b, --branch|--tag|--install-version <branch>: version to install
#	--install-directory <install-directory>: where to install
#	--install-file <install-file>: rc files to install to, forces install, repeatable
#	-i|--install|--no-install: install in bashrc
#	--remove-installer|--no-remove-installer: remove install script itself
#	aliases: --rm,
#	--ssh|--no-ssh: clone using ssh
#	--zip|--no-zip: install using zip archive, not recommended

# generic install
./get_bcT3 --install;
```