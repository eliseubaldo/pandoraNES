var app = angular.module('pandoraNES', ['ngRoute', 'angularUtils.directives.dirPagination', 'ngDialog'])
.constant('config', {
        thumbpath: 'assets/images/',
        boxhdpath:'assets/images/boxarthd/',
        boxldpath:'assets/images/boxartld/',
        //database:'pandoraNES.json' // or url 'loadDB.php'
        database:'loadDB.php',
        lastaddedgame:'lastAdded.json'
        //database:'http://www.thepixelhand.com/projects/pandoraNES/loadDB.php'        
    });

