import React, { Component } from 'react';
import './styles.css'


class GhostLayer extends Component {

  addSharedElement(element, cardBoundingRect) {
    element.classList.add('shared-element');
    element.style.top = `${cardBoundingRect.top}px`;
    element.style.left = `${cardBoundingRect.left}px`;
    element.style.height = `${cardBoundingRect.height}px`;
    element.style.width = `${cardBoundingRect.width}px`;
    element.style.transitionDuration = '500ms';
    this.ghostContainer_.appendChild(this.sharedElement_);
  }

  render() {
    return (
      <div className="GhostLayer">
        {this.props.layer}
      </div>
    );
  }
}

export default GhostLayer;
