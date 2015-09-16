import React from 'react';
import Library from './';
import Component from './library-component';
import Tabs from 'react-simpletabs';

import ImageCaption from '@economist/component-imagecaption';
import ImageCaptionPackage from '@economist/component-imagecaption/package';

import Icon from '@economist/component-icon';
import IconPackage from '@economist/component-icon/package';

import Palette from '@economist/component-palette/index.js';
import PalettePackage from '@economist/component-palette/package';
import PaletteExample from '@economist/component-palette/example.js';

export default (
  <Library>
    <Component metadata={PalettePackage} component={Palette}>
      {PaletteExample}
    </Component>

    <Component
      metadata={ImageCaptionPackage}
      component={ImageCaption}
      examples={{
        'No src-set': {
          caption: 'My caption',
          src: 'http://images.wildtangent.com/talesfromthedragonmountainstrix/big_icon.jpg',
          alt: 'this is the image descriptio',
        },
        'With src-set': {
          caption: 'With srcset',
          src: 'http://images.wildtangent.com/talesfromthedragonmountainstrix/big_icon.jpg',
          srcset: `http://worldif.economist.com//assets/434402ab5456@1x.jpg 1.0x
           http://worldif.economist.com//assets/434402ab5456@1.3x.jpg 1.3x,
           http://worldif.economist.com//assets/434402ab5456@1.4x.jpg 1.4x,
           http://worldif.economist.com//assets/434402ab5456@1.6x.jpg 1.6x,
           http://worldif.economist.com//assets/434402ab5456@2x.jpg 2.0x,
           http://worldif.economist.com//assets/434402ab5456@2.6x.jpg 2.6x,
           http://worldif.economist.com//assets/434402ab5456@3.3x.jpg 3.3x`,
          alt: 'this is the image description',
        },
      }}
    />

    <Component metadata={IconPackage} component={Icon} examples={false}>
      <Tabs.Panel title="Default version" key="icon-1">
        {Icon.options.icon.map((iconType) => {
          const key = `default--${iconType}`;
          return <Icon icon={iconType} key={key} />;
        })}
      </Tabs.Panel>
      <Tabs.Panel title="Rounded version" key="icon-2">
        {Icon.options.icon.map((iconType) => {
          const key = `rounded--${iconType}`;
          return (
              <Icon icon={iconType} className="rounded" color="white"
                background="black" key={key}
              />);
        })
        }
      </Tabs.Panel>
      <Tabs.Panel title="Icon as a background image" key="icon-3">
        {Icon.options.icon.map((iconType) => {
          const className = `icon icon--${iconType}`;
          return (
              <span className={className} key={className}>
                Text for a11y and SEO purposes.
              </span>);
        })}
      </Tabs.Panel>
      <Tabs.Panel title="Icon as a background image wit variation" key="icon-4">
        <div style={{ background: '#333' }}>
          {Icon.options.icon.map((iconType) => {
            const className = `icon icon--${iconType}-london`;
            return (
                <span className={className} key={className}>
                  Text for a11y and SEO purposes.
                </span>);
          })}
        </div>
      </Tabs.Panel>
    </Component>
  </Library>
);
