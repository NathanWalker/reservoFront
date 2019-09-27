module.exports = {
  name: 'web-reservo-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-reservo-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
