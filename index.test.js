// Copyright (c) 2017 ExcitableAardvark <excitableaardvark@tutanota.de>
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* eslint-env jest */

const cryptonightLite = require('./')

test('async hash of empty string', done => {
  return cryptonightLite.asyncHash(Buffer.from(''), data => {
    expect(data.toString('hex'))
      .toBe('4cec4a947f670ffdd591f89cdb56ba066c31cd093d1d4d7ce15d33704c090611')
    done()
  })
})

test('async hash of test string', done => {
  return cryptonightLite.asyncHash(Buffer.from('This is a test'), data => {
    expect(data.toString('hex'))
      .toBe('88e5e684db178c825e4ce3809ccc1cda79cc2adb4406bff93debeaf20a8bebd9')
    done()
  })
})

test('async invalid argument throws exception', () => {
  expect(() => cryptonightLite.asyncHash('not a buffer'))
    .toThrow(/buffer/)
})

test('async no argument throws exception', () => {
  expect(() => cryptonightLite.asyncHash())
    .toThrow(/buffer/)
})

test('extra arguments throws exception', () => {
  expect(() => cryptonightLite.asyncHash(Buffer.from(''), () => {}, 0))
    .toThrow(/buffer/)
})

test('sync hash of empty string', () => {
  expect(cryptonightLite.hash(Buffer.from('')).toString('hex'))
    .toBe('4cec4a947f670ffdd591f89cdb56ba066c31cd093d1d4d7ce15d33704c090611')
})

test('sync hash of test string', () => {
  expect(cryptonightLite.hash(Buffer.from('This is a test')).toString('hex'))
    .toBe('88e5e684db178c825e4ce3809ccc1cda79cc2adb4406bff93debeaf20a8bebd9')
})

test('sync invalid argument throws exception', () => {
  expect(() => cryptonightLite.hash('not a buffer'))
    .toThrow(/buffer/)
})

test('sync no argument throws exception', () => {
  expect(() => cryptonightLite.hash())
    .toThrow(/buffer/)
})

test('sync extra arguments throws exception', () => {
  expect(() => cryptonightLite.hash(Buffer.from(''), 0))
    .toThrow(/buffer/)
})
