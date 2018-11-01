<?php

namespace app\controllers;


class ArticleController extends AppController{


    public function viewAction(){

        $id = isset($_GET['id']) ? (int)$_GET['id'] : null;
        $article = null;
        if ($id){
            $article = \R::findOne('article', 'id = ?',[$id]);
        } else {
            redirect(PATH);
        }
        $this->setMeta($article->title);
        $this->setData(compact('article'));
    }
}