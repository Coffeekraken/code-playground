require('jquery');
import GoldenLayout from 'golden-layout';


const interactiveDemoElm = document.querySelector('s-interactive-demo');
const layout = interactiveDemoElm.getAttribute('layout') || 'top';

const config = {
	settings:{
        hasHeaders: false,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: false,
        popoutWholeStack: false,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        showPopoutIcon: false,
        showMaximiseIcon: true,
        showCloseIcon: false
    }
};

let editorsContent;
switch(layout) {
	case 'horizontal':
		config.content = [{
			type : "row",
			content : [{
				type : "row",
				content : []
			}, {
				type: 'component',
				componentName: 'preview',
				componentState : { label : 'preview' }
			}]
		}];
		editorsContent = config.content[0].content[0].content;
	break;
	case 'vertical':
		config.content = [{
			type : "column",
			content : [{
				type: 'component',
				componentName: 'preview',
				componentState : { label : 'preview' }
			}, {
				type : "column",
				content : []
			}]
		}];
		editorsContent = config.content[0].content[1].content;
	break;
	case 'top':
	config.content = [{
		type : "column",
		content : [{
			type: 'component',
			componentName: 'preview',
			componentState : { label : 'preview' }
		}, {
			type : "row",
			content : []
		}]
	}];
	editorsContent = config.content[0].content[1].content;
	break;
	case 'bottom':
		config.content = [{
			type : "column",
			content : [{
				type : "row",
				content : []
			}, {
				type: 'component',
				componentName: 'preview',
				componentState : { label : 'preview' }
			}]
		}];
		editorsContent = config.content[0].content[0].content;
	break;
	case 'left':
		config.content = [{
			type : "row",
			content : [{
				type: 'component',
				componentName: 'preview',
				componentState : { label : 'preview' }
			}, {
				type : "column",
				content : []
			}]
		}];
		editorsContent = config.content[0].content[1].content;
	break;
	case 'right':
		config.content = [{
			type : "row",
			content : [{
				type : "column",
				content : []
			}, {
				type: 'component',
				componentName: 'preview',
				componentState : { label : 'preview' }
			}]
		}];
		editorsContent = config.content[0].content[0].content;
	break;
	case 'embed':
	config.content = [{
		type : "column",
		content : [{
			type: 'component',
			componentName: 'preview',
			componentState : { label : 'preview' }
		}, {
			type : "row",
			content : [],
			height: 10
		}]
	}];
	editorsContent = config.content[0].content[1].content;
	break;
}

[].forEach.call(document.querySelectorAll('template'), (editor) => {
	if ( ! editor.id) return;
	editorsContent.push({
		type : 'component',
		componentName : editor.id,
		componentState : { label : editor.id }
	});
});

// create layout config
var myLayout,
savedState = localStorage.getItem( 'savedState' );
savedState = null;
if( savedState !== null) {
	const state = JSON.parse(savedState);
	if (state._layout === layout) {
    	myLayout = new GoldenLayout(state, document.querySelector('s-interactive-demo'));
	} else {
		myLayout = new GoldenLayout( config, document.querySelector('s-interactive-demo') );
	}
} else {
    myLayout = new GoldenLayout( config, document.querySelector('s-interactive-demo') );
}

myLayout.registerComponent('preview', (container, componentState) => {
	container.getElement().get(0).appendChild(interactiveDemoElm.querySelector('[s-interactive-demo-preview]'));
});
[].forEach.call(document.querySelectorAll('template'), (editor) => {
	if ( ! editor.id) return;
	myLayout.registerComponent(editor.id, (container, componentState) => {
		container.getElement().append(document.importNode(editor.content, true));
	});
});

// init layout
myLayout.init();

// save state
myLayout.on( 'stateChanged', function(){
	const stateToSave = myLayout.toConfig();
	stateToSave._layout = layout;
    var state = JSON.stringify(stateToSave);
    localStorage.setItem('savedState', state);
});

// handle window resize
window.addEventListener('resize', (e) => {
	myLayout.updateSize();
});
