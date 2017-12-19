import xml_loader from '../public/xml-loader.xml';

console.log(xml_loader);

console.log('success to bundling with webpack.');

document.cookie = 'key_a=1;path=/';
document.cookie = 'key_b=2;path=/';
const cookie = document.cookie;
document.write(cookie);

//document.write(`<div>Webpack Hot Module Replace Plugin with Webpack Development Server within ExpressJs Middleware.${JSON.stringify(xml_loader)}</div>`);