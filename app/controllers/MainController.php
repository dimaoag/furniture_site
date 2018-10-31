<?php
namespace app\controllers;




class MainController extends AppController
{
    public function indexAction(){

        $articles = \R::findAll('article', 'status = 1 AND is_show = 1');


        $this->setData(compact('articles'));
    }


}