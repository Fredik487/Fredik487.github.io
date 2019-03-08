warning: LF will be replaced by CRLF in Daruna/CSS/style.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in Daruna/index.html.
The file will have its original line endings in your working directory.
[1mdiff --git a/Daruna/CSS/style.css b/Daruna/CSS/style.css[m
[1mindex 158cbf0..b6f15ca 100644[m
[1m--- a/Daruna/CSS/style.css[m
[1m+++ b/Daruna/CSS/style.css[m
[36m@@ -1,3 +1,4 @@[m
[32m+[m[32mhtml{scroll-behavior: smooth;}[m
 body{[m
 	background:#feead4;[m
 	font-family:Candara;[m
[1mdiff --git a/Daruna/index.html b/Daruna/index.html[m
[1mindex 47043cc..65267bf 100644[m
[1m--- a/Daruna/index.html[m
[1m+++ b/Daruna/index.html[m
[36m@@ -25,7 +25,7 @@[m
 			фотосеты,<br>видео<br>[m
 			от милой тян<br>на ваш вкус[m
 		</h1>[m
[31m-		<a class="button" href="https://vk.com/absolute_shitt">заказать</a>[m
[32m+[m		[32m<a class="button" href="#screen-3">заказать</a>[m
 	</section>[m
 	<section class="screen-2">[m
 		<h1 class="h1-screen-2 h1">Прочти внимательно, товарищ!</h1>[m
[36m@@ -44,7 +44,7 @@[m
 			</div>[m
 		</div>[m
 	</section>[m
[31m-	<section class="screen-3">[m
[32m+[m	[32m<section class="screen-3" id="screen-3">[m
 		<h1 class="h1-screen-3 h1">Что вы можете заказать</h1>[m
 		<div class="orders">[m
 			<div class="order">[m
