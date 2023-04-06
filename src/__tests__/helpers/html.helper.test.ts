import { describe, expect, it } from "vitest";
import { convertUrlsToLinks, replaceNewlinesWithBr } from "../../helpers/html.helper";

describe('replaceNewlinesWithBr', () => {
    it('should return the same string if it does not contain newlines', () => {
      const input = 'This string does not contain any newlines';
      expect(replaceNewlinesWithBr(input)).toEqual(input);
    });
  
    it('should replace newlines with <br/> tags', () => {
      const input = 'This string\ncontains\nnewlines';
      const expectedOutput = 'This string<br/>contains<br/>newlines';
      expect(replaceNewlinesWithBr(input)).toEqual(expectedOutput);
    });
  
    it('should replace multiple newlines with <br/> tags', () => {
      const input = 'This string\n\n\ncontains\nmultiple\nnewlines';
      const expectedOutput = 'This string<br/><br/><br/>contains<br/>multiple<br/>newlines';
      expect(replaceNewlinesWithBr(input)).toEqual(expectedOutput);
    });
  });

  describe('convertUrlsToLinks', () => {
    it('should return the same string if it does not contain URLs', () => {
      const input = 'This string does not contain any URLs';
      expect(convertUrlsToLinks(input)).toEqual(input);
    });
  
    it('should convert URLs to anchor tags', () => {
      const input = 'Check out this website: https://www.example.com';
      const expectedOutput = 'Check out this website: <a href="https://www.example.com">https://www.example.com</a>';
      expect(convertUrlsToLinks(input)).toEqual(expectedOutput);
    });
  
    it('should convert multiple URLs to anchor tags', () => {
      const input = 'Here are two URLs: https://www.example.com and https://www.google.com';
      const expectedOutput = 'Here are two URLs: <a href="https://www.example.com">https://www.example.com</a> and <a href="https://www.google.com">https://www.google.com</a>';
      expect(convertUrlsToLinks(input)).toEqual(expectedOutput);
    });
  });