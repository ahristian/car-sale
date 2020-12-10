import Ember from 'ember';


export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    return this.get('session').fetch().catch(function () {
    });
  },
  actions: {
    singIn: function(provider) {
      this.get('session').open("firebase", {
        provider: provider,
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
