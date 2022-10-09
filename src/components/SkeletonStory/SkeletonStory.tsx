import {
  Card,
  CardHeader,
  Skeleton,
  CardContent,
  Box
} from '@mui/material';
import { memo } from 'react';

export const SkeletonStory = () => (
  <Card sx={{ mb: 2 }}>
    <CardHeader
      avatar={
        <Skeleton
          animation="wave"
          variant="circular"
          width={40}
          height={40}
        />
      }
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={
        <Skeleton animation="wave" height={10} width="40%" />
      }
    />
    {/* !important is bad practice, I know :/ */}
    <CardContent sx={{ paddingBottom: '16px !important' }}>
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="rounded" height={25} width={100} sx={{ mb: 0 }} />
          <Skeleton animation="wave" variant="rounded" height={25} width={100} sx={{ mb: 0 }} />
        </Box>
      </>
    </CardContent>
  </Card>
);

export default memo(SkeletonStory);
