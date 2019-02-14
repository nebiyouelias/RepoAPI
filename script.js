'use strict'
 
 function getUserRepo(input){
  fetch(`https://api.github.com/users/${input}/repos`)
  .then(response => response.json())
  .then(responseJson => 
   displayResults(responseJson))
  .catch (error => alert('Sorry Something Went Wrong'));
  
}
 function displayResults(responseJson){
  console.log(responseJson);
  $('.response').replaceWith(
    `<ul>
    <li>${responseJson.message}</li>
    
    </ul>`
  )
  
  $('.response').removeClass('.hidden');
}
 
 
 
 
 function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const input= $('#js-search-term').val();
    getUserRepo(input);
    
    
  });
}
function appLoaded() {
  console.log('App loaded! Waiting for submit!');
  watchForm();

}
appLoaded();