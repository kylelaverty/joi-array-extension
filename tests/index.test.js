'use strict';

const expect = require('chai').expect;

const Extension = require('../');
const Joi = require('joi').extend(Extension);

describe('string', () => {
    describe('split', () => {
        it('validates an empty string, returns error', (done) => {
            const schema = Joi.array()
                .seperator(',');
            schema.validate('', (err, value) => {
                expect(err).to.be.null;
                expect(value).to.be.empty;
                done();
            });
        });

        it('validates an empty optional string, returns error', (done) => {
            const schema = Joi.array()
                .optional()
                .seperator(',');
            schema.validate('', (err, value) => {
                expect(err).to.be.null;
                expect(value).to.be.empty;
                done();
            });
        });

        it('validates a single element string, returns array with one value', (done) => {
            let testValue = '1value1';
            const schema = Joi.array()
                .optional()
                .seperator(',');
            schema.validate(testValue, (err, value) => {
                expect(err).to.be.null;
                expect(value).to.not.be.empty;
                expect(value.length).to.equal(1);
                expect(value[0]).to.equal(testValue);
                done();
            });
        });

        it('validates multivlaue element string, returns array with many values', (done) => {
            let testValue = '1value1,2value2,3value3,4value4,5value5';
            const schema = Joi.array()
                .optional()
                .seperator(',');
            schema.validate(testValue, (err, value) => {
                expect(err).to.be.null;
                expect(value).to.not.be.empty;
                expect(value.length).to.equal(5);
                expect(value[0]).to.equal('1value1');
                expect(value[4]).to.equal('5value5');
                done();
            });
        });

        it('validates element array, returns array', (done) => {
            let testValue = ['1value1', '2value2', '3value3', '4value4,5value5'];
            const schema = Joi.array()
                .optional()
                .seperator(',');
            schema.validate(testValue, (err, value) => {
                expect(err).to.be.null;
                expect(value).to.not.be.empty;
                expect(value.length).to.equal(4);
                expect(value[0]).to.equal('1value1');
                expect(value[3]).to.equal('4value4,5value5');
                done();
            });
        });

        it('validates multivlaue element string, non-standard multicharacter seperator, returns array with many values', (done) => {
            let testValue = '1value1|s|2value2|s|3value3|s|4value4|s|5value5';
            const schema = Joi.array()
                .optional()
                .seperator('|s|');
            schema.validate(testValue, (err, value) => {
                expect(err).to.be.null;
                expect(value).to.not.be.empty;
                expect(value.length).to.equal(5);
                expect(value[0]).to.equal('1value1');
                expect(value[4]).to.equal('5value5');
                done();
            });
        });
    });
});