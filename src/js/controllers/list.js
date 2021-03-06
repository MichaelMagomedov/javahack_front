angular.module('app').controller('listController', ['$http', '$scope', '$timeout', '$state', function ($http, $scope, $timeout, $state) {
    $scope.list = undefined;
    $scope.price = 32000;
    $scope.selectedOkpds = 8874016;
    $scope.sliderOption = {
        getPointerColor: function () {
            return '#000';
        },
        getSelectionBarColor: function () {
            return '#fce844'
        }
    }
    $scope.okpds = [
        {
            "value": 8874011,
            "label": "14.3: Предметы одежды трикотажные и вязаные",
            "id": 8874011,
            "code": "14.3",
            "name": "Предметы одежды трикотажные и вязаные"
        },
        {
            "value": 8874012,
            "label": "15.1: Кожа дубленая и выделанная; чемоданы, сумки дамские, изделия шорно-седельные и упряжь; меха выделанные и окрашенные",
            "id": 8874012,
            "code": "15.1",
            "name": "Кожа дубленая и выделанная; чемоданы, сумки дамские, изделия шорно-седельные и упряжь; меха выделанные и окрашенные"
        },
        {
            "value": 8874013,
            "label": "15.2: Обувь",
            "id": 8874013,
            "code": "15.2",
            "name": "Обувь"
        },
        {
            "value": 8874014,
            "label": "16.1: Лесоматериалы, распиленные и строганые",
            "id": 8874014,
            "code": "16.1",
            "name": "Лесоматериалы, распиленные и строганые"
        },
        {
            "value": 8874015,
            "label": "16.2: Изделия из дерева, пробки, соломки и материалов для плетения",
            "id": 8874015,
            "code": "16.2",
            "name": "Изделия из дерева, пробки, соломки и материалов для плетения"
        },
        {
            "value": 8874016,
            "label": "17.1: Целлюлоза, бумага и картон",
            "id": 8874016,
            "code": "17.1",
            "name": "Целлюлоза, бумага и картон"
        },
        {
            "value": 8874017,
            "label": "17.2: Изделия из бумаги и картона",
            "id": 8874017,
            "code": "17.2",
            "name": "Изделия из бумаги и картона"
        },
        {
            "value": 8874018,
            "label": "18.1: Услуги полиграфические и услуги, связанные с печатанием",
            "id": 8874018,
            "code": "18.1",
            "name": "Услуги полиграфические и услуги, связанные с печатанием"
        },
        {
            "value": 8874019,
            "label": "18.2: Услуги по копированию звуко- и видеозаписей, а также программных средств",
            "id": 8874019,
            "code": "18.2",
            "name": "Услуги по копированию звуко- и видеозаписей, а также программных средств"
        },
        {
            "value": 8874020,
            "label": "19.1: Продукция коксовых печей",
            "id": 8874020,
            "code": "19.1",
            "name": "Продукция коксовых печей"
        },
        {
            "value": 8874021,
            "label": "19.2: Нефтепродукты",
            "id": 8874021,
            "code": "19.2",
            "name": "Нефтепродукты"
        },
        {
            "value": 8874022,
            "label": "19.3: Продукция агломерации угля",
            "id": 8874022,
            "code": "19.3",
            "name": "Продукция агломерации угля"
        },
        {
            "value": 8874023,
            "label": "20.1: Вещества химические основные, удобрения химические и азотные, пластмассы и синтетический каучук в первичных формах",
            "id": 8874023,
            "code": "20.1",
            "name": "Вещества химические основные, удобрения химические и азотные, пластмассы и синтетический каучук в первичных формах"
        },
        {
            "value": 8874024,
            "label": "20.2: Пестициды и агрохимические продукты прочие",
            "id": 8874024,
            "code": "20.2",
            "name": "Пестициды и агрохимические продукты прочие"
        },
        {
            "value": 8874025,
            "label": "20.3: Материалы лакокрасочные и аналогичные для нанесения покрытий, полиграфические краски и мастики",
            "id": 8874025,
            "code": "20.3",
            "name": "Материалы лакокрасочные и аналогичные для нанесения покрытий, полиграфические краски и мастики"
        },
        {
            "value": 8874026,
            "label": "20.4: Мыло и средства моющие, средства чистящие и полирующие, средства парфюмерные и косметические",
            "id": 8874026,
            "code": "20.4",
            "name": "Мыло и средства моющие, средства чистящие и полирующие, средства парфюмерные и косметические"
        },
        {
            "value": 8874027,
            "label": "20.5: Продукты химические прочие",
            "id": 8874027,
            "code": "20.5",
            "name": "Продукты химические прочие"
        },
        {
            "value": 8874028,
            "label": "20.6: Волокна химические",
            "id": 8874028,
            "code": "20.6",
            "name": "Волокна химические"
        },
        {
            "value": 8874029,
            "label": "21.1: Субстанции фармацевтические",
            "id": 8874029,
            "code": "21.1",
            "name": "Субстанции фармацевтические"
        },
        {
            "value": 8874030,
            "label": "21.2: Препараты лекарственные и материалы, применяемые в медицинских целях",
            "id": 8874030,
            "code": "21.2",
            "name": "Препараты лекарственные и материалы, применяемые в медицинских целях"
        },
        {
            "value": 8874031,
            "label": "22.1: Изделия резиновые",
            "id": 8874031,
            "code": "22.1",
            "name": "Изделия резиновые"
        },
        {
            "value": 8874032,
            "label": "22.2: Изделия из пластмасс",
            "id": 8874032,
            "code": "22.2",
            "name": "Изделия из пластмасс"
        },
        {
            "value": 8874033,
            "label": "23.1: Стекло и изделия из стекла",
            "id": 8874033,
            "code": "23.1",
            "name": "Стекло и изделия из стекла"
        },
        {
            "value": 8874034,
            "label": "Изделия огнеупорные",
            "id": 8874034,
            "code": "23.2",
            "name": "Изделия огнеупорные"
        },
        {
            "value": 8874035,
            "label": "23.3: Материалы керамические строительные",
            "id": 8874035,
            "code": "23.3",
            "name": "Материалы керамические строительные"
        },
        {
            "value": 8874036,
            "label": "23.4: Изделия фарфоровые и керамические прочие",
            "id": 8874036,
            "code": "23.4",
            "name": "Изделия фарфоровые и керамические прочие"
        },
        {
            "value": 8874037,
            "label": "23.5: Цемент, известь и гипс",
            "id": 8874037,
            "code": "23.5",
            "name": "Цемент, известь и гипс"
        },
        {
            "value": 8874038,
            "label": "23.6: Изделия из бетона, цемента и гипса",
            "id": 8874038,
            "code": "23.6",
            "name": "Изделия из бетона, цемента и гипса"
        },
        {
            "value": 8874039,
            "label": "23.7: Камень разрезанный, обработанный и отделанный",
            "id": 8874039,
            "code": "23.7",
            "name": "Камень разрезанный, обработанный и отделанный"
        },
        {
            "value": 8874040,
            "label": "23.9: Продукция минеральная неметаллическая прочая",
            "id": 8874040,
            "code": "23.9",
            "name": "Продукция минеральная неметаллическая прочая"
        },
        {
            "value": 8874041,
            "label": "24.1: Железо, чугун, сталь и ферросплавы",
            "id": 8874041,
            "code": "24.1",
            "name": "Железо, чугун, сталь и ферросплавы"
        },
        {
            "value": 8874042,
            "label": "24.2: Трубы, профили пустотелые и их фитинги стальные",
            "id": 8874042,
            "code": "24.2",
            "name": "Трубы, профили пустотелые и их фитинги стальные"
        },
        {
            "value": 8874043,
            "label": "24.3: Полуфабрикаты стальные прочие",
            "id": 8874043,
            "code": "24.3",
            "name": "Полуфабрикаты стальные прочие"
        },
        {
            "value": 8874044,
            "label": "24.4: Металлы основные драгоценные и цветные прочие; топливо ядерное переработанное",
            "id": 8874044,
            "code": "24.4",
            "name": "Металлы основные драгоценные и цветные прочие; топливо ядерное переработанное"
        },
        {
            "value": 8874045,
            "label": "24.5: Услуги по литью металлов",
            "id": 8874045,
            "code": "24.5",
            "name": "Услуги по литью металлов"
        },
        {
            "value": 8874046,
            "label": "25.1: Металлоконструкции строительные",
            "id": 8874046,
            "code": "25.1",
            "name": "Металлоконструкции строительные"
        },
        {
            "value": 8874047,
            "label": "25.2: Резервуары, цистерны и аналогичные емкости из металлов",
            "id": 8874047,
            "code": "25.2",
            "name": "Резервуары, цистерны и аналогичные емкости из металлов"
        },
        {
            "value": 8874048,
            "label": "25.3: Котлы паровые, кроме водогрейных котлов центрального отопления",
            "id": 8874048,
            "code": "25.3",
            "name": "Котлы паровые, кроме водогрейных котлов центрального отопления"
        },
        {
            "value": 8874049,
            "label": "25.4: Оружие и боеприпасы",
            "id": 8874049,
            "code": "25.4",
            "name": "Оружие и боеприпасы"
        },
        {
            "value": 8874050,
            "label": "25.5: Услуги по ковке, прессованию, штамповке и профилированию листового металла; услуги по производству изделий методом порошковой металлургии",
            "id": 8874050,
            "code": "25.5",
            "name": "Услуги по ковке, прессованию, штамповке и профилированию листового металла; услуги по производству изделий методом порошковой металлургии"
        },
        {
            "value": 8874051,
            "label": "25.6: Услуги по обработке металлов и нанесению покрытий на них; услуги по обработке металлических изделий с использованием основных технологических процессов машиностроения",
            "id": 8874051,
            "code": "25.6",
            "name": "Услуги по обработке металлов и нанесению покрытий на них; услуги по обработке металлических изделий с использованием основных технологических процессов машиностроения"
        },
        {
            "value": 8874052,
            "label": "25.7: Изделия ножевые, инструмент и универсальные скобяные изделия",
            "id": 8874052,
            "code": "25.7",
            "name": "Изделия ножевые, инструмент и универсальные скобяные изделия"
        },
        {
            "value": 8874053,
            "label": "25.9: Изделия металлические готовые прочие",
            "id": 8874053,
            "code": "25.9",
            "name": "Изделия металлические готовые прочие"
        },
        {
            "value": 8874054,
            "label": "26.1: Компоненты электронные и платы",
            "id": 8874054,
            "code": "26.1",
            "name": "Компоненты электронные и платы"
        },
        {
            "value": 8874055,
            "label": "26.2: Компьютеры и периферийное оборудование",
            "id": 8874055,
            "code": "26.2",
            "name": "Компьютеры и периферийное оборудование"
        },
        {
            "value": 8874056,
            "label": "26.3: Оборудование коммуникационное",
            "id": 8874056,
            "code": "26.3",
            "name": "Оборудование коммуникационное"
        },
        {
            "value": 8874057,
            "label": "26.4: Техника бытовая электронная",
            "id": 8874057,
            "code": "26.4",
            "name": "Техника бытовая электронная"
        },
        {
            "value": 8874058,
            "label": "26.5: Оборудование для измерения, испытаний и навигации; часы всех видов",
            "id": 8874058,
            "code": "26.5",
            "name": "Оборудование для измерения, испытаний и навигации; часы всех видов"
        },
        {
            "value": 8874059,
            "label": "26.6: Оборудование для облучения, электрическое диагностическое и терапевтическое, применяемые в медицинских целях",
            "id": 8874059,
            "code": "26.6",
            "name": "Оборудование для облучения, электрическое диагностическое и терапевтическое, применяемые в медицинских целях"
        },
        {
            "value": 8874060,
            "label": "26.7: Приборы оптические и фотографическое оборудование",
            "id": 8874060,
            "code": "26.7",
            "name": "Приборы оптические и фотографическое оборудование"
        },
        {
            "value": 8874061,
            "label": "26.8: Носители информации магнитные и оптические",
            "id": 8874061,
            "code": "26.8",
            "name": "Носители информации магнитные и оптические"
        },
        {
            "value": 8874062,
            "label": "27.1: Электродвигатели, генераторы, трансформаторы и электрическая распределительная и контрольно-измерительная аппаратура",
            "id": 8874062,
            "code": "27.1",
            "name": "Электродвигатели, генераторы, трансформаторы и электрическая распределительная и контрольно-измерительная аппаратура"
        },
        {
            "value": 8874063,
            "label": "27.2: Батареи и аккумуляторы",
            "id": 8874063,
            "code": "27.2",
            "name": "Батареи и аккумуляторы"
        },
        {
            "value": 8874064,
            "label": "27.3: Кабели и арматура кабельная",
            "id": 8874064,
            "code": "27.3",
            "name": "Кабели и арматура кабельная"
        },
        {
            "value": 8874065,
            "label": "27.4: Оборудование электрическое осветительное",
            "id": 8874065,
            "code": "27.4",
            "name": "Оборудование электрическое осветительное"
        },
        {
            "value": 8874066,
            "label": "27.5: Приборы бытовые",
            "id": 8874066,
            "code": "27.5",
            "name": "Приборы бытовые"
        },
        {
            "value": 8874067,
            "label": "27.9: Оборудование электрическое прочее",
            "id": 8874067,
            "code": "27.9",
            "name": "Оборудование электрическое прочее"
        },
        {
            "value": 8874068,
            "label": "28.1: Машины и оборудование общего назначения",
            "id": 8874068,
            "code": "28.1",
            "name": "Машины и оборудование общего назначения"
        },
        {
            "value": 8874069,
            "label": "28.2: Машины и оборудование общего назначения прочие",
            "id": 8874069,
            "code": "28.2",
            "name": "Машины и оборудование общего назначения прочие"
        },
        {
            "value": 8874070,
            "label": "28.3: Машины и оборудование для сельского и лесного хозяйства",
            "id": 8874070,
            "code": "28.3",
            "name": "Машины и оборудование для сельского и лесного хозяйства"
        }
    ];
    $scope.moment = moment;
    $scope.requestOkpds = function () {
        $http.get('http://10.91.4.84:8080', {
            params: {
                okpdId: $scope.selectedOkpds,
                priceToGeneral: $scope.price
            }
        }).then(function (resp) {
            $timeout(function () {
                $scope.list = resp.data
            }, 2000)
        })
    }
    $scope.goToItem = function (item) {
        $state.go('app.item', {item: item})
    }
    $scope.requestOkpds();
    $scope.$watch('selectedOkpds', function () {
        $scope.list = undefined;
        $scope.requestOkpds();
    })
    $scope.$on('slideEnded', function () {
        $scope.list = undefined;
        $scope.requestOkpds();
    })
}]);



