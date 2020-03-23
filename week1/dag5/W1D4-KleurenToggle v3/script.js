/**
 * 
 * @param {string} type: id, class or body
 * @param {string} elem: element name
 * 
 */

const elem = function(type, value){
    switch(type){
        case 'id':
            return document.getElementById(value);
        case 'class':
            return document.getElementsByClassName(value);
        case 'body':
            return document.body;
    }
    return null;
};

/**
 *  
 *  @param {object} colors: Object with color data
 *  @param {number} count: Number of colors
 *  Builds menu of color choices based on appColors object
 *  Inserts <li> items into the existing <ul> element in the DOM
 * 
 */

const appBuildColorMenu = function(colors, count){
    output = '';
    for (let i = 1; i <= count; i++) {
        color = colors['color'+i];
        output += '<li id="color' + i + '" style="background-color:' +
            color.value + '"><input id="color' + i +
            'btn" type="radio" name="color" value="' + color.value + '">' +
            color.label + '<span>' + i + '</span</li>';
    }
    appMenuChoices.innerHTML = output;
};

/**
 * 
 *  Prevents color transition effect on background from firing
 *  after page load
 * 
 */

const appInitBkgndTransition = function(){
    if(!appBody.classList.contains('transition'))
        appBody.classList.add('transition');
};

/**
 * 
 *  @param {boolean} action: Show or hide the color menu
 * 
 */

const appToggleColorMenu = function(action){
    if(action){
        Array.from(appMenuIcon).forEach(function(e){
            e.classList.remove('anim2');
            e.classList.add('anim1');
        });
        appMenuColors.classList.remove('hide');
        appMenuColors.classList.add('show');
    }else{
        Array.from(appMenuIcon).forEach(function(e){
            e.classList.remove('anim1');
            e.classList.add('anim2');
        });
        appMenuColors.classList.remove('show');
        appMenuColors.classList.add('hide');
    }
};

/**
 * 
 *  Sets the mouseover and mouseout eventListener
 * 
 */

const appSetTogglerEvents = function(){
    appMenuToggler.addEventListener('mouseover',function(){
        appToggleColorMenu(true);
        appInitBkgndTransition();
    });
    appMenuToggler.addEventListener('mouseout',function(){
        appToggleColorMenu(false);
    });
    appMenuColors.addEventListener('mouseover',function(){
        appToggleColorMenu(true);
    });
};

/**
 * 
 *  @param {string} color: Color to apply to the body background
 * 
 */

const appChangeBackgroundColor = function(color){
    appBody.style = 'background-color:'+color;
};

/**
 * 
 *  @param {string} label: Label for the selected color
 *  @param {string} value: Color value for the selected color
 */

const appChangeBodyMessage = function(label, value){
    appBodyMessage.innerHTML = label+'<br /><span class="light">'+value+'</span>';
};

/**
 * 
 *  @param {string} button: Radio button checked example from source #2
 * 
 */

const appSelectRadioButton = function(button){
    document.getElementById(button).checked = true;
};

/**
 * 
 *  @param {object} colors: Object with color data
 *  @param {number} count: Number of colors
 *  Sets click eventListener on <li> element for all menu choices
 * 
 */

const appSetColorChoiceEventsLoop = function(colors, count){
    for (let i = 1; i <= count; i++) {
        appSetColorChoiceEvents('color'+i,colors);
    }
};

/**
 * 
 *  @param {string} color: Sets click eventListener on one <li> element
 *  @param {object} colors: Object with color data
 * 
 */

const appSetColorChoiceEvents = function(color,colors){
    document.getElementById(color).addEventListener('click',function(){
        appChangeBackgroundColor(colors[color].value);
        appSelectRadioButton(color+'btn');
        appChangeBodyMessage(colors[color].label, colors[color].value);
        appToggleColorMenu(false);
    });
};

/**
 * 
 *  Sets click eventListener on <body> to close color menu
 * 
 */

const appSetCloseMenuFromBodyEvent = function(){
    appBody.addEventListener('click',function(){
        appToggleColorMenu(false);
    });
};

/**
 * 
  * @param {object} colors: Object with color data
 *  keyCode for numeric key 1 through 9; example from source #4
 * 
 */

const appSetKeyPressEvent = function(colors){
    appBody.addEventListener('keypress', function(pressed){
        if(pressed.keyCode >= 49 && pressed.keyCode <= 57){
            appChangeBackgroundColorByKeypress(pressed.key, colors);
        }
    });
};

/**
 * 
 *  @param {number} key: Change menu and body background color
 *                       based on numeric keys 1 through 9
 *  @param {object} colors: Object with color data
 *  
 */

const appChangeBackgroundColorByKeypress = function(key, colors){
    color = colors['color'+key];
    appInitBkgndTransition();
    appChangeBackgroundColor(color.value);
    appSelectRadioButton('color'+key+'btn');
    appChangeBodyMessage(color.label, color.value);
};

/**
 * 
 *  Initialize the color toggle menu, choices and eventListeners
 * 
 *  Thought behind colors object is to make the color menu dynamic
 *  and generate the HTML for the choices using JavaScript. The keyCode
 *  works for the first 9 colors.
 * 
 */

const appBody = elem('body');
const appMenuToggler = elem('id','toggler');
const appMenuIcon = elem('class','icon');
const appMenuColors = elem('id','colors');
const appMenuChoices = elem('id','choices');
const appBodyMessage = elem('id','message');

const appInit = function(){

    colors = {
        color1: {
            label: 'Home',
            value: '#999999'
        },
        color2: {
            label: 'Red',
            value: '#CC2929'
        },
        color3: {
            label: 'Orange',
            value: '#FF8000'
        },
        color4: {
            label: 'Purple',
            value: '#9C3DCC'
        },
        color5: {
            label: 'Green',
            value: '#3DCC3D'
        },
    
        // Uncomment for additional colors
        
        color6: {
            label: 'Yellow',
            value: '#FFD500'
        },
        color7: {
            label: 'Aqua',
            value: '#29CCCC'
        },
        color8: {
            label: 'Blue',
            value: '#295FCC'
        },
        color9: {
            label: 'Magenta',
            value: '#E64595'
        }
    
    };

    // Object.keys example from source #1
    count = Object.keys(colors).length;

    appBuildColorMenu(colors, count);
    appSetTogglerEvents();
    appSetColorChoiceEventsLoop(colors, count);
    appSetCloseMenuFromBodyEvent();
    appSetKeyPressEvent(colors);
};

appInit();

/**
 * 
 *  Sources
 * 
 *  #1: https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
 *  #2: https://stackoverflow.com/questions/21166860/check-a-radio-button-with-javascript
 *  #4: https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
 * 
 */