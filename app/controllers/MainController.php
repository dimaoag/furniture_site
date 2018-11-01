<?php
namespace app\controllers;




class MainController extends AppController
{
    public function indexAction(){

        $articles = \R::findAll('article', 'status = 1 AND is_show = 1');
        $jobs = \R::findAll('job', 'status = 1');
        $galleries = \R::findAll('gallery');


        $this->setMeta('Furniture');
        $this->setData(compact('articles', 'jobs', 'galleries'));
    }


}