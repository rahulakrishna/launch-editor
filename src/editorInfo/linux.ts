import * as path from 'path';
import userHome from 'user-home';

export default [
  {
    name: 'code',
    process: ['code'],
    location: [
      path.join(userHome, '.vscode'),
    ],
    commands: [
      'code',
    ],
    opts: [],
  },
  {
    name: 'code-insiders',
    process: ['code-insiders'],
    location: [
      path.join(userHome, '.vscode'),
    ],
    commands: [
      'code-insiders',
    ],
    opts: [],
  },
  {
    name: 'atom',
    process: ['atom'],
    location: [
    ],
    commands: [
      'atom',
    ],
  },
  {
    name: 'subl',
    process: ['sublime_text'],
    location: [
    ],
    commands: [
      'subl',
    ],
  },
]

