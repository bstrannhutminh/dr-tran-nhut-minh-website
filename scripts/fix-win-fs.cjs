// Workaround for Windows exFAT / non-NTFS drives where fs.readlink throws EISDIR instead of EINVAL.
// Safe no-op on Linux / Vercel deployment environments.
if (process.platform === 'win32') {
  const fs = require('fs');

  const origReadlink = fs.readlink;
  fs.readlink = function (path, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    return origReadlink.call(this, path, options, (err, linkString) => {
      if (err && err.code === 'EISDIR') {
        err.code = 'EINVAL';
      }
      if (callback) callback(err, linkString);
    });
  };

  const origReadlinkSync = fs.readlinkSync;
  fs.readlinkSync = function (path, options) {
    try {
      return origReadlinkSync.call(this, path, options);
    } catch (err) {
      if (err && err.code === 'EISDIR') {
        err.code = 'EINVAL';
      }
      throw err;
    }
  };

  if (fs.promises && fs.promises.readlink) {
    const origPromisesReadlink = fs.promises.readlink;
    fs.promises.readlink = async function (path, options) {
      try {
        return await origPromisesReadlink.call(this, path, options);
      } catch (err) {
        if (err && err.code === 'EISDIR') {
          err.code = 'EINVAL';
        }
        throw err;
      }
    };
  }
}
