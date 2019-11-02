
import React from "react";
import Popup from "reactjs-popup";

export const WarningPopup = ({ content }) => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div> {`Popup content: ${content}`} </div>
  </Popup>
);

export const InfoPopup = ({ content }) => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
      <div> {`Popup content: ${content}`} </div>
    </Popup>
  );
  
/*
var addMenu;

componentWillMount: function() {
    addMenu = new nw.Menu();
    addMenu.append(new nw.MenuItem({
        label: 'doSomething',
        click: function() {
            // doSomething
        }
    }));
},

contextMenu: function(e) {
    e.preventDefault();
    addMenu.popup(e.clientX, e.clientY);
},

render: function(){
    return <button onClick={this.handleClick} onContextMenu={this.contextMenu}>SomethingUseful</button>
}

*/