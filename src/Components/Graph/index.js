import React, { useEffect } from 'react';
import data from 'Components/Layout/data';
import { useSprings, a, config } from '@react-spring/web';

const getItems = (category, index) => {
  const item = data.items[index];
  const temp = item.cat === category ? item : { ...item, width: 0, opacity: 0 };
  return temp;
};

export default function Graph({ category }) {
  const [springs, api] = useSprings(data.items.length, (index) => ({
    from: getItems('', index),
    to: getItems(category, index),
    config: config.slow,
  }));

  useEffect(() => {
    api((index) => getItems(category, index));
  }, [category]);
  return (
    <svg
      width="600"
      height="350"
      viewBox="0 0 600 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 2">
        <rect width="600" height="350" fill="#110D3D" />
        <g id="grid">
          <rect
            id="Rectangle 4"
            x="80"
            width="500"
            height="300"
            fill="#E1A3A3"
            fillOpacity="0.06"
          />
          <line
            id="Line 1"
            x1="181"
            y1="1"
            x2="181"
            y2="299"
            stroke="#423D7D"
            strokeOpacity="0.53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
          <line
            id="Line 2"
            x1="281"
            y1="1"
            x2="281"
            y2="299"
            stroke="#423D7D"
            strokeOpacity="0.53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
          <line
            id="Line 3"
            x1="381"
            y1="1"
            x2="381"
            y2="299"
            stroke="#423D7D"
            strokeOpacity="0.53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
          <line
            id="Line 4"
            x1="481"
            y1="1"
            x2="481"
            y2="299"
            stroke="#423D7D"
            strokeOpacity="0.53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
          <line
            id="Line 5"
            x1="581"
            y1="1"
            x2="581"
            y2="299"
            stroke="#423D7D"
            strokeOpacity="0.53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
        </g>
        <g id="x-axis">
          <text
            id="20%"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="166.512" y="318.282">
              20%
            </tspan>
          </text>
          <text
            id="60%"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="366.512" y="318.282">
              60%
            </tspan>
          </text>
          <text
            id="80%"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="466.512" y="318.282">
              80%
            </tspan>
          </text>
          <text
            id="100%"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="563.47" y="318.282">
              100%
            </tspan>
          </text>
          <text
            id="40%"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="266.512" y="318.282">
              40%
            </tspan>
          </text>
        </g>
        <g id="y-axis">
          <text
            id="Product - 1"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="45">
              Product - 1
            </tspan>
          </text>
          <text
            id="Product - 2"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="90">
              Product - 2
            </tspan>
          </text>
          <text
            id="Product - 3"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="135">
              Product - 3
            </tspan>
          </text>
          <text
            id="Product - 4"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="180">
              Product - 4
            </tspan>
          </text>
          <text
            id="Product - 5"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="225">
              Product - 5
            </tspan>
          </text>
          <text
            id="Product - 6"
            fill="#807BB6"
            xmlSpace="preserve"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="10" y="270">
              Product - 6
            </tspan>
          </text>
        </g>
        <g id="values">
          {springs.map(({ color, width, y, opacity }, index) => (
            <a.rect
              x="80"
              y={y}
              width={width}
              height="30"
              fill={color}
              key={index}
              style={{ opacity }}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
