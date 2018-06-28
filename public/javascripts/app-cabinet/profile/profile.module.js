
const Profile = angular.module('Profile', [])

Profile
    .controller('ProfileCtrl', ['activeElem', ProfileCtrl])
    .service('activeElem', activeElem)
    .directive('tabSet', function () {
        return {
            restrict: 'E',
            scope: {id: '=nameid', title: '=nametab', grup: '=grup', vm: '=ctrl'},
            template: `<span class="{{vm.elem[grup] == id ? 'active':''}}" ng-click="vm.showTabList(id, grup)">{{title}}</span>`
        }
    })
    .directive('radioButton', function () {
        return {
            restrict: 'E',
            scope: {text: '=labelText', val: '=labelVal', name: '=labelName', vm: '=ctrl'},
            template: `
                <div ng-click="vm.radioButton(name, val)">
                    <div class="viewinput radioButton" data-name="{{name}}" data-val="{{val}}"><span></span></div><span>{{text}}</span>
                </div>`
        }
    })
    .directive('checkButton', function () {
        return {
            restrict: 'E',
            scope: {text: '=labelText', val: '=labelVal', vm: '=ctrl'},
            template: `
                <div ng-click="vm.checkButton(val)">
                    <div class="viewinput checkButton" data-val="{{val}}"><span></span></div><span>{{text}}</span>
                </div>`
        }
    });

function ProfileCtrl(activeElem){
    const vm = this;
    vm.radioButton = (name, val)=>{
        $('.viewinput.radioButton').each(i => {
            if ($('.viewinput.radioButton')[i].dataset.name == name){
                if ($('.viewinput.radioButton')[i].dataset.val == val){
                    $('.viewinput.radioButton')[i].classList.add('show')
                }else{
                    $('.viewinput.radioButton')[i].classList.remove('show');
                    activeElem.gender = {
                        name: name,
                        val: val
                    }
                }
            }
        });
    };
    vm.checkButton = (val) => {
        $('.viewinput.checkButton').each(i => {
            if ($('.viewinput.checkButton')[i].dataset.val == val){
                if (activeElem.category[val]){
                    activeElem.category[val] = false;
                    $('.viewinput.checkButton')[i].classList.remove('show')
                }else{
                    activeElem.category[val] = true;
                    $('.viewinput.checkButton')[i].classList.add('show')
                }
            }
            console.log(activeElem.category);
        });
    };
    vm.elem = activeElem.elem;
    $(window[activeElem.elem['f']]).toggleClass('show');
    $(window[activeElem.elem['s']]).toggleClass('show');
    $(window[activeElem.elem['fb']]).toggleClass('show');
    vm.showTabList = (listName, grup) => {
        console.log(grup);
        if (activeElem.elem[grup]){
            $(window[activeElem.elem[grup]]).toggleClass('show');
            activeElem.elem[grup] = listName;
            $(window[activeElem.elem[grup]]).toggleClass('show');
        }else{
            activeElem.elem[grup] = listName;
            console.log(activeElem.elem[grup]);
            $(window[activeElem.elem[grup]]).toggleClass('show')
        }
        console.log(activeElem.elem);
    }
}

function activeElem() {
    return {
        elem: {f:"t1", s:"mt2", fb:"fb1"},
        gender: '',
        category: []
    }
}