export default function(projectname) {
  if (location.href.match('http://yle.fi/plus/yle')) {
    return 'http://yle.fi/plus/yle/2015/' + projectname + '/';
  }
  else if (location.href.match('http://yle.fi')) {
    return 'http://yle.fi/plus/2015/' + projectname + '/';
  }
  else {
    return '2015/' + projectname + '/';
  }
}
