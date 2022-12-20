@ECHO OFF
CLS
SET DIR_DESTINO="\\bndes.net\bndes\Aplicacoes\SiteBNDES\4.PRD\arquivos\metaverso"
SUBST G: %DIR_DESTINO%
ECHO.
ECHO Esse script ira sobreescrever os arquivos no Site do BNDES. Caso nao deseje continuar, pressione CTRL+C. Caso queira continuar, pressione qualquer outra tecla.
ECHO.
PAUSE
ECHO.
XCOPY /Y * G:
XCOPY /E /Y assets G:\assets
XCOPY /E /Y libs G:\libs
XCOPY /E /Y tour-360 G:\tour-360
XCOPY /E /Y video-360 G:\video-360
ECHO.
ECHO Tudo copiado!
ECHO.
PAUSE
