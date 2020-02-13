import './RadarPanel.scss'

import * as React from 'react'

import { Position, Player, CHARACTER_IMAGES } from '../../../models/Emulator.model'

interface RadarPanelProps {
  self: Player
  players: (Player | null)[]
}

const RADIUS = 90
const VIEW_DISTANCE = 0x200
const STROKE_WIDTH = 2
const FILL = '#eee'
const ICON_SIZE = 20

export class RadarPanel extends React.PureComponent<RadarPanelProps> {
  constructor (props: RadarPanelProps) {
    super(props)
    this.renderPlayers = this.renderPlayers.bind(this)
  }

  private renderPlayers (selfPos: Position, players: (Player | null)[]): JSX.Element {
    const rotation = selfPos.rotation * 2 * Math.PI / 0xFFFF
    const rotSin = Math.sin(rotation)
    const rotCos = Math.cos(rotation)
    return <>
      {
        players
          .filter(player => !!player)
          .filter(player => !!player!.position)
          .map((player, index) => {
            const x = this.normalize(rotCos * player!.position!.x - rotSin * player!.position!.y)
            const y = this.normalize(rotSin * player!.position!.x + rotCos * player!.position!.y)
            return <div
              key={player!.username || index}
              className='radar-panel-icon-wrapper'
              style={{
                top: RADIUS - y - ICON_SIZE / 2,
                left: RADIUS - x - ICON_SIZE / 2,
                width: ICON_SIZE,
                height: ICON_SIZE
              }}
            >
              <img
                className='radar-panel-icon'
                src={`img/${CHARACTER_IMAGES[player!.characterId || 0]}`}
              />
            </div>
          })

      }
    </>
  }

  private normalize (val: number): number {
    return val * RADIUS / VIEW_DISTANCE
  }

  public render (): JSX.Element {
    const { self, players } = this.props
    let playersMock: (Player | null)[]
    if (process.env.NODE_ENV === 'development') {
      playersMock = [ ...players ]
      playersMock[2] = {
        characterId: 2,
        username: 'Player 2',
        position: {
          x: 0x100,
          y: 0x100,
          rotation: 0
        }
      }
      playersMock[4] = {
        characterId: 4,
        username: 'Player 4',
        position: {
          x: -0x80,
          y: 0x1a0,
          rotation: 0
        }
      }
      playersMock[7] = {
        characterId: 7,
        username: 'Player 7',
        position: {
          x: 0x50,
          y: -0xf0,
          rotation: 0
        }
      }
    }
    return (
      <div className='radar-panel'>
        <svg width={RADIUS * 2} height={RADIUS * 2}>
          <g>
            <circle cx={RADIUS} cy={RADIUS} fill={FILL} r={RADIUS} stroke="#000" strokeWidth={STROKE_WIDTH} />
            <circle cx={RADIUS} cy={RADIUS} fill={FILL} r={RADIUS * 2 / 3} stroke="#000" strokeWidth={STROKE_WIDTH} />
            <circle cx={RADIUS} cy={RADIUS} fill={FILL} r={RADIUS / 3} stroke="#000" strokeWidth={STROKE_WIDTH} />
            <line stroke="#000" strokeWidth={STROKE_WIDTH} x1="0" x2={RADIUS * 2} y1={RADIUS} y2={RADIUS} />
            <line stroke="#000" strokeWidth={STROKE_WIDTH} x1={RADIUS} x2={RADIUS} y1="0" y2={RADIUS * 2} />
          </g>
        </svg>
        { self.position && this.renderPlayers(self.position, process.env.NODE_ENV === 'development' ? playersMock! : players) }
      </div>
    )
  }
}
