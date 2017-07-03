import jsmediatags from 'jsmediatags';

debugger
jsmediatags.read("./Sleep Away.mp3", {
  onSuccess: function(tag) {
    console.log(tag);
  },
  onError: function(error) {
    console.log(':(', error.type, error.info);
  }
});
