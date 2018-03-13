process.env.IS_TEST = true

const expect = require('chai').expect
const cls = require('./../lib/index.js')
const closestRoot = cls.closestRoot
const isRootDir = cls.isRootDir
const traverseUp = cls.traverseUp

const path = require('path')
const fs = require('fs')

describe('Closest Root', function () {
	describe('#closestRoot()', function () {
		it('should return the directory path of the closest package.json file', function () {
			let result = closestRoot(__dirname)
			
			expect(result).to.be.a('string')
			expect(path.parse(result).base).to.equal('closest-root')
			expect(fs.existsSync(path.join(result, 'package.json'))).to.equal(true)
		})
	})
	
	describe('#isRootDir()', function () {
		it('should return true if directory contains package.json, false otherwise', function () {
			let resultRoot = isRootDir(path.dirname(__dirname))
			let resultNotRoot = isRootDir(__dirname)
			
			expect(resultRoot).to.be.a('boolean')
			expect(resultRoot).to.equal(true)
			expect(resultNotRoot).to.be.a('boolean')
			expect(resultNotRoot).to.equal(false)
		})
	})
	
	describe('#traverseUp()', function () {
		it('should return the directory path of the closest package.json file', function () {
			let result = traverseUp(__dirname)
			
			expect(result).to.be.a('string')
			expect(path.parse(result).base).to.equal('closest-root')
			expect(fs.existsSync(path.join(result, 'package.json'))).to.equal(true)
		})
	})
})
