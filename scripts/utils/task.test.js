import { test, expect, describe } from 'vitest';
import { getTaskNumber, getSubTaskNumber } from './task';


describe('getTaskNumber', () => {
  describe('fromPath', () => {
    test('should return the task number when inside a task folder', () => {
      const path = '/home/gianpaulo/Projects/worktree/tasks/fix.265103.000000-css-rules-override/delaunay-ui';
      expect(getTaskNumber.fromPath(path)).toBe('265103');
    })

    test('should return null when outsice a task folder', () => {
      const path = '/home/gianpaulo/Projects/worktree/tasks';
      expect(getTaskNumber.fromPath(path)).toBe(null);
    })
  })

  describe('fromBranchName', () => {
    test('should return the task number when present on branch name', () => {
      const branch = 'feature/265103/css-rules-override';
      expect(getTaskNumber.fromBranchName(branch)).toBe('265103');
    })

    test('should return null when task number is not present on branch name', () => {
      const branch = 'feature/css-rules-override';
      expect(getTaskNumber.fromBranchName(branch)).toBe(null);
    })
  })
})

describe('getSubTaskNumber', () => {
  describe('fromPath', () => {
    test('should return the sub task number when inside a task folder', () => {
      const path = '/home/gianpaulo/Projects/worktree/tasks/fix.265103.234879-css-rules-override/delaunay-ui';
      expect(getSubTaskNumber.fromPath(path)).toBe('234879');
    })

    test('should return null when a subtask is just zeros', () => {
      const path = '/home/gianpaulo/Projects/worktree/tasks/fix.265103.000000-css-rules-override/delaunay-ui';
      expect(getSubTaskNumber.fromPath(path)).toBe(null);
    })

    test('should return null when outsice a task folder', () => {
      const path = '/home/gianpaulo/Projects/worktree/tasks';
      expect(getSubTaskNumber.fromPath(path)).toBe(null);
    })
  })

  describe('fromBranchName', () => {
    test('should return the sub task number when present on branch name', () => {
      const branch = 'feature/265103/123407-css-rules-override';
      expect(getSubTaskNumber.fromBranchName(branch)).toBe('123407');
    })

    test('should return the sub task number when present on branch name', () => {
      const branch = 'feature/265103/000000-css-rules-override';
      expect(getSubTaskNumber.fromBranchName(branch)).toBe(null);
    })

    test('should return null when task number is not present on branch name', () => {
      const branch = 'feature/css-rules-override';
      expect(getSubTaskNumber.fromBranchName(branch)).toBe(null);
    })
  })
})

