import Ember from 'ember';

const { Component, inject } = Ember;

export default Ember.Component.extend({
  session: inject.service()
});
