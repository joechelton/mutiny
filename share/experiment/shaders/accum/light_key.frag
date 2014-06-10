#ifdef GL_ES
  precision highp float;
#endif

uniform sampler2D in_Texture;

varying vec2 ex_Uv;

void main()
{
  gl_FragColor = texture2D(in_Texture, ex_Uv);

  if(gl_FragColor.x != 1.0)
  {
    gl_FragColor = vec4(0, 0, 0, 1);
  }
}
