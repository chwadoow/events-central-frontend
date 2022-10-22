import { Image } from 'antd';
import React, { useState } from 'react';

const about  = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
    <h1>Who we are</h1>
    <p>Bringing the World together through live experience</p>
    <p1>Thunder tick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.</p1>
      <Image
        preview={{ visible: false }}
        width={200}
        src="https://i.pinimg.com/564x/8e/34/f2/8e34f26b587a5a8a291ca3c7511d8d63.jpg"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src="" />
          <Image src="https://i.pinimg.com/564x/58/ae/36/58ae361361ebfd70e91391ccff2cfd85.jpg" />
          <Image src="https://i.pinimg.com/564x/8c/da/fc/8cdafc67418faf8b9993e830cbc8c6fb.jpg" />
        </Image.PreviewGroup>
      </div>
      </div>
    
  );
};

export default about