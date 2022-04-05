import { useContext } from 'react';
import { List } from '@mui/material';
import QueueEmpty from '../components/QueueEmpty/QueueEmpty';
import MainListItem from '../components/listItem/MainListItem';
import { DSTasks, YaddsCtx } from '../context/YaddsContext';

const QueueStopped: React.FC = () => {
  const { tasks } = useContext(YaddsCtx);

  return tasks.filter((task) => task.status === 3).length === 0 ? (
    <QueueEmpty />
  ) : (
    <List>
      {tasks
        .filter((task) => task.status === 3)
        .map((item: DSTasks) => (
          <MainListItem key={item.id} item={item} />
        ))}
    </List>
  );
};

export default QueueStopped;
