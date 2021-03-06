<?php
namespace app\controllers;

use furniture\App;


class MainController extends AppController
{
    public function indexAction(){

        $articles = \R::findAll('article', 'status = 1 AND is_show = 1');
        $jobs = \R::findAll('job', 'status = 1');
        $galleries = \R::findAll('gallery');

        $title = 'Мягкая мебель на заказ в Виннице';
        $description = 'Мебель с эксклюзивным дизайном под любой интерьер. Гарантия на всю продукцию, бесплатный замер и сборка мебели. Выполненные работы и расчет цены на сайте!';
        $keywords = 'фабрика диванов диванов Винница, мебель Винница';

        $this->setMeta($title, $description, $keywords);
        $this->setData(compact('articles', 'jobs', 'galleries'));
    }


    public function sendCommentAction(){
        $res = 0;
        if (!empty($_POST) ) {
            $project_name = App::$app->getProperty('shop_name');
            $admin_email = App::$app->getProperty('admin_email');
            $form_subject = "Комментарий с сайта" . $project_name;
            $phone_key = 'Телефон';
            $comment_key = 'Комментарий';
            $phone_value = str_replace(" ", "", $_POST['phone']);
            $comment_value = h($_POST['comment']);

            $message = '<table style="width: 100%;">'
                . '<tr style="background-color: #f8f8f8;">'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $phone_key . '</b></td>'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $phone_value . '</td>'
                . '</tr></table>';

            $message .= '<table style="width: 100%;">'
                . '<tr style="background-color: #f8f8f8;">'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $comment_key . '</b></td>'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $comment_value . '</td>'
                . '</tr></table>';

            function adopt($text){
                return '=?UTF-8?B?' . base64_encode($text) . '?=';
            }

            $headers = "MIME-Version: 1.0" . PHP_EOL .
                "Content-Type: text/html; charset=utf-8" . PHP_EOL .
                'From: ' . adopt($project_name) .  PHP_EOL .
                'Reply-To: ' . $admin_email . '' . PHP_EOL;

            mail($admin_email, adopt($form_subject), $message, $headers);

            $res = "1";

        }
        echo json_encode($res);
        die();
    }


    public function sendOrderAction(){
        $res = 0;
        if (!empty($_POST) ) {
            $project_name = App::$app->getProperty('shop_name');
            $admin_email = App::$app->getProperty('admin_email');
            $form_subject = "Заявка с сайта" . $project_name;
            $phone_key = 'Телефон';
            $name_key = 'Имя';
            $phone_value = str_replace(" ", "", $_POST['phone']);
            $name_value = h($_POST['name']);
            $message = '<table style="width: 100%;">'
                . '<tr style="background-color: #f8f8f8;">'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $phone_key . '</b></td>'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $phone_value . '</td>'
                . '</tr></table>';

            $message .= '<table style="width: 100%;">'
                . '<tr style="background-color: #f8f8f8;">'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $name_key . '</b></td>'
                . '<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $name_value . '</td>'
                . '</tr></table>';

            function adopt($text){
                return '=?UTF-8?B?' . base64_encode($text) . '?=';
            }

            $headers = "MIME-Version: 1.0" . PHP_EOL .
                "Content-Type: text/html; charset=utf-8" . PHP_EOL .
                'From: ' . adopt($project_name) .  PHP_EOL .
                'Reply-To: ' . $admin_email . '' . PHP_EOL;

            mail($admin_email, adopt($form_subject), $message, $headers);

            $res = "1";

        }
        echo json_encode($res);
        die();
    }


}