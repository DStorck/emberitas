import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Dean Martin',
  color: 'green',
  actions: {
    updateName(newName){
      this.set('name', newName)},
    setColor(newColor){
      this.set('color', newColor);
    }
  }
});
