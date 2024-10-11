import { Breadcrumbs } from '@/components/breadcrumbs';
import { TodoBoard } from '../todo-board';
import NewTaskDialog from '../new-task-dialog';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Todo', link: '/dashboard/todo' }
];

export default function TodoViewPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`todo`} description="Manage tasks by dnd" />
          <NewTaskDialog />
        </div>
        <TodoBoard />
      </div>
    </PageContainer>
  );
}
