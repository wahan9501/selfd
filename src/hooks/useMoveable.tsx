import React from 'react';
import Moveable, {
  OnDrag,
  OnDragStart,
  OnResize,
  OnResizeStart,
} from 'react-moveable';

const useMoveable = () => {
  const [target, setTarget] = React.useState<HTMLElement>();
  const [frame] = React.useState({ translate: [0, 0] });
  const ref = React.useRef<any>(null);
  React.useEffect(() => setTarget(ref.current ?? undefined), [ref.current]);

  return { ref, frame, target };
};

const useResize = (frame: any) => {
  const onResizeStart = (e: OnResizeStart) => {
    e.setOrigin(['%', '%']);
    e.dragStart && e.dragStart.set(frame.translate);
  };

  const onResize = (e: OnResize) => {
    const beforeTranslate = e.drag.beforeTranslate;

    frame.translate = beforeTranslate;
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  };

  return { onResizeStart, onResize };
};

const useDraggable = (frame: any) => {
  const onDragStart = (e: OnDragStart) => {
    e.set(frame.translate);
  };

  const onDrag = (e: OnDrag) => {
    frame.translate = e.beforeTranslate;
    e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
  };

  return { onDragStart, onDrag };
};

export const useStorybookMoveable = (element: JSX.Element): JSX.Element => {
  const { ref, frame, target } = useMoveable();
  const { onResizeStart, onResize } = useResize(frame);
  const { onDragStart, onDrag } = useDraggable(frame);

  return (
    <>
      <div ref={ref}>{element}</div>
      <Moveable
        target={target}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        zoom={1}
        edge={false}
        origin={false}
        resizable={true}
        throttleResize={0}
        keepRatio={false}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        onResizeStart={onResizeStart}
        onResize={onResize}
        draggable={true}
        throttleDrag={0}
        startDragRotate={0}
        throttleDragRotate={0}
        onDragStart={onDragStart}
        onDrag={onDrag}
      />
    </>
  );
};
