@echo off
echo =======================================
echo  SINCRONIZANDO SITE COM O GITHUB...
echo =======================================
echo.

git add .
git commit -m "Atualizacao automatica do site"
git push

echo.
echo =======================================
echo  PRONTO! Alteracoes enviadas com sucesso!
echo  O Vercel ja vai atualizar o site.
echo =======================================
pause
