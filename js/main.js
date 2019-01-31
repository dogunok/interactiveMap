var allPlace = document.querySelectorAll('.place');
var number = document.querySelector('.number');
var condition = document.querySelector('.condition');
var priceOneArea = document.querySelector('.priceOneArea');
var area = document.querySelector('.area')
var tooltip = document.querySelector('.tooltip');
var priceBlock = document.querySelector('.priceBlock');
var gas = document.querySelector('.gas');
var electro = document.querySelector('.electro');
var datumPoint = document.querySelector('.datumPoint');
var svg = document.querySelector('svg');


allPlace.forEach(function(item){
    var elemPlace = item.id.split('_').join('').split('x3').join('phaseNumber_');
    item.addEventListener('mouseenter', function(){
        tooltip.style.top = svg.height.baseVal.value/2 - 100 + 'px';
        tooltip.style.right = svg.width.baseVal.value/4 - 220 + 'px'
        tooltip.classList.remove('hidden')
        // Делаю из ID целое число добавляя 'phaseNumber_' для ключа объекта
        var siteNumber = this.id.split('_').join('').split('x3').join('phaseNumber_');
        // Если числа нет в номере участка но он проверяет как no_number
        if(data[0]['phaseNumber_no_number'].phaseNumber !== 'undefined'){
            number.parentNode.classList.remove('hidden')
            number.textContent = data[0]['phaseNumber_no_number'].phaseNumber;
        }

        // если число есть то заходим в это условие и все проверяем
        if(data[0][siteNumber + '']){
            if( data[0][siteNumber + ''].phaseNumber !== 'undefined'){
                number.parentNode.classList.remove('hidden')
                number.textContent = data[0][siteNumber + ''].phaseNumber;
            }else {
                number.parentNode.classList.add('hidden')
            }
            
            if(data[0][siteNumber + ''].condition !== 'undefined'){
                condition.classList.remove('hidden')
                condition.textContent = data[0][siteNumber + ''].condition;
            } else{
                condition.classList.add('hidden')
            }

            // Цена за 1 сотку, если нужна то нужно раскоментировать.
            // if(data[0][siteNumber + ''].price !== 'undefined' && data[0][siteNumber + ''].area !== 'undefined'){
            //     priceOneArea.parentNode.classList.remove('hidden');
            //     priceOneArea.textContent = (Math.round(data[0][siteNumber + ''].price/data[0][siteNumber + ''].area) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            // } else{
            //     priceOneArea.parentNode.classList.add('hidden');
            // }

            if(data[0][siteNumber + ''].area !== 'undefined'){
                area.parentNode.classList.remove('hidden')
                area.textContent = data[0][siteNumber + ''].area;
            } else{
                area.parentNode.classList.add('hidden')
            }

            if(data[0][siteNumber + ''].price !== 'undefined'){
                priceBlock.querySelector('.price').classList.remove('hidden')
                priceBlock.classList.remove('hidden')
                priceBlock.querySelector('.price').textContent = data[0][siteNumber + ''].price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            } else{
                priceBlock.querySelector('.price').classList.add('hidden')
                priceBlock.classList.add('hidden')
            }

            if(data[0][siteNumber + ''].electricity !== 'undefined'){
                electro.classList.remove('hidden')
            } else{
                electro.classList.add('hidden')
            }

            if(data[0][siteNumber + ''].gas !== 'undefined'){
                gas.classList.remove('hidden')
            } else{
                gas.classList.add('hidden')
            }

        }



        if(this.querySelector('polygon')){
            this.querySelector('polygon').classList.add('red')
        } else if(this.querySelector('rect')){
            this.querySelector('rect').classList.add('red')
        } else{
            this.querySelector('path').classList.add('red')
        }

        document.querySelector('svg').insertAdjacentElement('beforeend', document.querySelector('#' + this.id))
    })

    item.addEventListener('mouseout', function(){
        if(this.querySelector('polygon')){
            tooltip.classList.add('hidden')
            this.querySelector('polygon').classList.remove('red')
        } else if(this.querySelector('rect')){
            tooltip.classList.add('hidden')
            this.querySelector('rect').classList.remove('red')
        } else if(this.querySelector('path')){
            tooltip.classList.add('hidden')
            this.querySelector('path').classList.remove('red')
        } else{
            
        }
    })
    if(data[0][elemPlace + ''] && data[0][elemPlace + ''].electricity !== 'undefined' && data[0][elemPlace + ''].gas !== 'undefined' && data[0][elemPlace + ''].condition === 'undefined'){
        item.classList.add('gasElectro')
    } else if(data[0][elemPlace + ''] && data[0][elemPlace + ''].electricity !== 'undefined' && data[0][elemPlace + ''].gas == 'undefined' && data[0][elemPlace + ''].condition === 'undefined'){
        item.classList.add('electro')
    }
})




