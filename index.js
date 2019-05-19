'use strict';

var libcash = module.exports;

// module information
libcash.version = 'v' + require('./package.json').version;
libcash.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of libcash found. ' +
      'Please make sure to require libcash and check that submodules do' +
      ' not also include their own libcash dependency.';
    throw new Error(message);
  }
};
libcash.versionGuard(global._libcash);
global._libcash = libcash.version;

// crypto
libcash.crypto = {};
libcash.crypto.BN = require('./lib/crypto/bn');
libcash.crypto.ECDSA = require('./lib/crypto/ecdsa');
libcash.crypto.Hash = require('./lib/crypto/hash');
libcash.crypto.Random = require('./lib/crypto/random');
libcash.crypto.Point = require('./lib/crypto/point');
libcash.crypto.Signature = require('./lib/crypto/signature');

// encoding
libcash.encoding = {};
libcash.encoding.Base58 = require('./lib/encoding/base58');
libcash.encoding.Base58Check = require('./lib/encoding/base58check');
libcash.encoding.BufferReader = require('./lib/encoding/bufferreader');
libcash.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
libcash.encoding.Varint = require('./lib/encoding/varint');

// utilities
libcash.util = {};
libcash.util.buffer = require('./lib/util/buffer');
libcash.util.js = require('./lib/util/js');
libcash.util.preconditions = require('./lib/util/preconditions');
libcash.util.base32 = require('./lib/util/base32');
libcash.util.convertBits = require('./lib/util/convertBits');

// errors thrown by the library
libcash.errors = require('./lib/errors');

// main bitcoin library
libcash.Address = require('./lib/address');
libcash.Block = require('./lib/block');
libcash.MerkleBlock = require('./lib/block/merkleblock');
libcash.BlockHeader = require('./lib/block/blockheader');
libcash.HDPrivateKey = require('./lib/hdprivatekey.js');
libcash.HDPublicKey = require('./lib/hdpublickey.js');
libcash.Message = require('./lib/message');
libcash.Networks = require('./lib/networks');
libcash.Opcode = require('./lib/opcode');
libcash.PrivateKey = require('./lib/privatekey');
libcash.PublicKey = require('./lib/publickey');
libcash.Script = require('./lib/script');
libcash.Transaction = require('./lib/transaction');
libcash.URI = require('./lib/uri');
libcash.Unit = require('./lib/unit');

// dependencies, subject to change
libcash.deps = {};
libcash.deps.bnjs = require('bn.js');
libcash.deps.bs58 = require('bs58');
libcash.deps.Buffer = Buffer;
libcash.deps.elliptic = require('elliptic');
libcash.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
libcash.Transaction.sighash = require('./lib/transaction/sighash');
