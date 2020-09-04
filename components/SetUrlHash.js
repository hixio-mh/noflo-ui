const noflo = require('noflo');
const { hashToString } = require('../src/urls');

exports.getComponent = () => {
  const c = new noflo.Component();
  c.inPorts.add('in',
    { datatype: 'object' });
  c.outPorts.add('out',
    { datatype: 'bang' });

  return noflo.helpers.WirePattern(c, {
    async: true,
    forwardGroups: false,
  },
  (data, groups, out, callback) => {
    window.location.hash = hashToString(data.payload);
    out.send(true);
    return callback();
  });
};
