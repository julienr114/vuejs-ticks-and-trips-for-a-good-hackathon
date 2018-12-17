var db = {
  dreamTeam: {
    1: { name: 'Jerôme' },
    2: { name: 'Mathieu' },
    3: { name: 'Julien' },
    4: { name: 'Etienne' }
  },

  columns: {
    1: { title: 'todo', order: 1 },
    2: { title: 'done', order: 4 },
    3: { title: 'review', order: 3 },
    4: { title: 'doing', order: 2 },
  },

  tags: {
    1: { title: 'feature', color: 'grey' },
    2: { title: 'refactoring', color: 'green' },
    3: { title: 'bug', color: 'orange' },
    4: { title: 'urgent', color: 'red' },
    5: { title: 'critical', color: 'purple' },
    6: { title: 'awesome', color: 'blue' }
  },

  tickets: {
    1: {
      content: 'It\'s not who I am underneath but what I do that defines me.',
      assigns: [2],
      column: 4,
      tags: [1, 6],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    2: {
      content: 'Very well. Death! By exile',
      assigns: [1],
      column: 4,
      tags: [2],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    3: {
      content: 'Bruce Wayne, eccentric billionaire.',
      assigns: [
        1
      ],
      column: 3,
      tags: [1],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    4: {
      content: 'Are you so desperate to fight criminals that you lock yourself in to take them on one at a time ?',
      assigns: [1, 4],
      column: 2,
      tags: [3, 5, 4],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    5: {
      content: 'It doesn\'t matter who we are. What matters is our plan.',
      assigns: [2],
      column: 2,
      tags: [1,4],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    6: {
      content: 'I hope you\'re not a member of the fire brigade.',
      assigns: [3],
      column: 2,
      tags: [],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    7: {
      content: 'No, no, no, I kill the bus driver.',
      assigns: [3, 4],
      column: 1,
      tags: [3],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    8: {
      content: 'I just the took to calling it the Bat. And yes Mr. Wayne, it does come in black.',
      assigns: [2],
      column: 1,
      tags: [2],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    9: {
      content: 'How about a magic trick? I\'m gonna make this pencil disappear. Ta-da!',
      assigns: [1, 2, 3, 4],
      column: 1,
      tags: [1, 6],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    },
    10: {
      content: 'It was a dog. It was a big dog.',
      assigns: [4],
      column: 1,
      tags: [3],
      created_at: '2018-06-12T10:01:27.369Z',
      updated_at: '2018-06-12T10:01:27.369Z'
    }
  }
}