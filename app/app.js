// Controller angularJS
// 2018

var app = angular.module('dashboard', []);

app.controller('Hdashboard', function($scope){

    $scope.data = [{
        no: 1,
        nama: 'Nestiawan Ferdiyanto',
        email: 'p.nestiawan@gmail.com',
        notelp: 081267059803
    },{
        no: 2,
        nama: 'Hanusin',
        email: 'H.hanusin@gmail.com',
        notelp: 081268989892
    },{
        no: 3,
        nama: 'Rangga saputra',
        email: 'ranngga.3212@gmail.com',
        notelp: 081269839803
    },{
        no: 4,
        nama: 'Annisa ranasyati',
        email: 'ranasyati.nisa@gmail.com',
        notelp: 081284839803
    },{
        no: 5,
        nama: 'Ratu Kirani',
        email: 'kirantu@gmail.com',
        notelp: 081238592003
    }];

});