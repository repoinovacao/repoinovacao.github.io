@ECHO OFF
CLS
SET DIR_DESTINO="C:\git\repoinovacao.github.io"
SUBST F: %DIR_DESTINO%
ECHO.
ECHO Esse script ira sobreescrever os arquivos no Site REPO INOVACAO. Caso nao deseje continuar, pressione CTRL+C. Caso queira continuar, pressione qualquer outra tecla.
ECHO.
PAUSE
ECHO.
XCOPY /Y * F:
XCOPY /E /Y assets F:\assets
XCOPY /E /Y libs F:\libs
XCOPY /E /Y tour-360 F:\tour-360
XCOPY /E /Y video-360 F:\video-360
ECHO.
ECHO Tudo copiado!
ECHO.
PAUSE
